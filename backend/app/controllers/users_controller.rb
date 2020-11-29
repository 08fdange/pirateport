class UsersController < ApplicationController
    before_action :authenticate_request, except: :create
    before_action :find_user, except: %i[create index upload_avatar]

    def index
        @users = User.all
        
        users_json = UserSerializer.new(@users).serialized_json
        render json: users_json, status: :ok
    end

    def show
        render json: UserSerializer.new(@user).serialized_json, status: :ok
    end

    def create
        @user = User.new(user_params)
        if @user.save
            command = AuthenticateUser.call(@user.email, @user.password)

            if command.success?
                render json: {user: @user, auth_token: command.result}, status: :created
            end
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        unless @user.update(user_params)
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @user.destroy
    end

    def upload_avatar
        @user = User.find_by(username: avatar_params[:username])
        @user.avatar.attach(avatar_params[:avatar])
        if @user.avatar.attached?
            avatar_serializer = AvatarSerializer.new(avatar: @user.avatar, user: @user)
            render json: avatar_serializer.serialize_new_avatar()
        else
            render json: {errors: "No Avatar Attached"}, status: 400
        end
    end

    private

        def find_user
            @user = User.find_by(username: params[:username])
            rescue ActiveRecord::RecordNotFound
            render json: { errors: 'User not found' }, status: :not_found
        end
    
        def user_params
            params.require(:user).permit(
                :name, :username, :email, :password, :password_confirmation, :phone_number
            )
        end

        def avatar_params
            params.permit(:avatar, :username)
        end

end

