class TagsController < ApplicationController

  def index
    @tags = Tag.all.order(:id)
  end

  def new
    @tag = Tag.new
  end

  def edit
    @tag = Tag.find_by(:id => params[:id])
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.save
    if @tag.save
      redirect_to tags_path
    else
      render :new
    end
  end

  def show
    @tag = Tag.find_by(:id => params[:id])
  end

  def update
    Tag.find(params[:id]).update(tag_params)
    redirect_to tags_path
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    redirect_to tags_path
  end

  def tag_params
    params.require(:tag).permit(:name)
  end

end
