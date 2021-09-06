class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

  def index
    @comments = Comment.all
    render :index
  end

  def show
    @comment = Picture.find(params[:id])
    if @comment
      render :show
    else
      render json: ['Your comment cannot be found, please try again.'], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end


  def destroy
    @comment = Comment.find_by(id: params[:id])
    if current_user.id != @comment.commenter_id
      render json: ['You cannot delete something that is not there.'], status: 401
    elsif @comment
      @comment.destroy
      render :show
    else
      render json: ['Your comment cannot be found, please try again.'], status: 404
    end
  end

  private 

  def comment_params
    params.require(:comment).permit(:comment, :picture_id)
  end
end
