class Api::PicturesController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def create
        @picture = Picture.new(picture_params)
        @picture.picture.attach(params[:picture][:picture])
        # debugger
        if @picture.save
            @user = User.find(@picture.user_id)
            @user.pictures.push(@picture)
            @user.save
            render 'api/pictures/show' #front-end component 
        else 
            render json: @picture.errors.full_messages, status: 401
        end
    end 

    def show
        @picture = Picture.find_by(id: params[:id])
        if @picture 
        render :show
        else
        render json: ['not found'], status: 404
        end
    end 

    def index
        # if params.has_key?(:user_id)
        #     @pictures = Picture.where(user_id: params[:user_id])
        # else
        #     @pictures = Picture.all
        # end
        @pictures = Picture.all
        render :index
    end

    def destroy
        @picture = Picture.find(params[:id])
        if @picture.destroy
        render :index
        else
        render plain: "You can't destroy what's not there."
        end
    end
    
    private

    def picture_params
        params.require(:picture).permit(:title, :description, :user_id, :picture)
    end
end
