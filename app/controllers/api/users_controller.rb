class Api::UsersController < ApplicationController

    def new 
        @user = User.new
        render :new 
    end 

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 401
        end
    end 

    def show
        @user = user.find(params[:id])
    end

    def index 
        @users = User.all
    end 

    def destroy 
        @user = User.find(params[:id])
        if @user
            @user.destroy
            render :show 
        else 
            render json: ['User not found']
        end
    end 

    private 
    def user_params
        params.require(:user).permit(:username, :password)
    end

end

