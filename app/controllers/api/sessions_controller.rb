class Api::SessionsController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            render json: ['Username or Password does not exist'], status: 401 
        else
            login!(@user)
            render 'api/users/show'
        end
    end 

    def destroy
        if @user.logged_in?
            logout!
            render json: { message: 'Logout was successful.'}
            redirect_to new_session_url
        else 
            render json: ['There is no current user to log out'], status: 404
        end 
    end
end
