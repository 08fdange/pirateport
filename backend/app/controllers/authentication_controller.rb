class AuthenticationController < ApplicationController

    def authenticate
        command = AuthenticateUser.call(params[:email], params[:password])

        if command.success?
            render json: { auth_token: command.result, user: {
                email: params[:email], 
                name: User.find_by(email: params[:email]).name,
                username: User.find_by(email: params[:email]).username,
                user_id: User.find_by(email: params[:email]).id
                }}

        else
            render json: { error: command.errors }, status: :unauthorized
        end
    end
    
end