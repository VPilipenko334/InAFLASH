class Api::PicturesController < ApplicationController


    def index
        @pictures = Picture.all 
        render :index 
    end

    def show
        @picture = Picture.find(params[:id])
        render :show
    end

    #creating/ adding a new picture 
    def create
        @picture = Picture.new(picture_params)
        if @picture.save! && picture.user_id == current_user.id
            render 'api/pictures/show' #front-end component 
        else 
            render json: @picture.errors.full_messages, status: 401
        end
    end 

    def destroy 
        @picture = Picture.find(params[:id])
        if @picture.user_id == current_user.id
            @picture.destroy
            render "api/pictures/show" #pictures show page will render 
        end
    end 

    
    private 

    def picture_params
        params.require(:picture).permit(:title, :description, :user_id, :photo)
    end



end
