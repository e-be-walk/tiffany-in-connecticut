class WindowsController < ApplicationController
  before_action :validate_user_info
  before_action :set_site, only: [:show, :create]
  skip_before_action :validate_user_info, only: [:show]

  def show
    @window = Window.find(params[:id])
    respond_to do |f|
      f.html
      f.json {render json: @window}
    end
  end

  def index
    @windows = Window.all
    respond_to do |f|
      f.html
      f.json {render json: @windows}
    end
  end

  def new
    @site = Site.find(params[:site_id])
    @window = @site.windows.build
  end

  def edit
    @site = Site.find(params[:site_id])
    @window = Window.find(params[:id])
  end

  def create
    @site = Site.find(params[:site_id])
    @window = Window.create(window_params)
    respond_to do |f|
      f.html
      f.json {render json: @site}
    end
  end

  def update
    @site = Site.find(params[:site_id])
    @window = Window.find(params[:id])
    @window.update(window_params)
    @window.save
    redirect_to site_window_path(@site, @window)
  end

  def destroy
    @window = Window.find(params[:id])
    @window.destroy
    redirect_to user_path(current_user)
  end


private

  def window_params
    params.require(:window).permit(
      :site_id,
      :name,
      :date,
      :dedication,
      :description,
      :image
    )
  end

  def set_site
    @site = Site.find(params[:site_id])
  end
end
