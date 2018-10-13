class SitesController < ApplicationController

  def index
    @sites = Site.all

    render json: @sites
  end

  def show
    render json: @site
  end

  def new
    @site = Site.new
  end

  def create
    @site = Site.new(site_params)
    if @site.save
      render json: @site, status: :created, location: @site
    else
      render json: @site.errors, status: :unprocessable_entity
    end
  end

  def edit
    @site = Site.find(params[:id])
  end

  def update
    @site = Site.find(params[:id])
    @site.update(site_params)
    if @site.save
      render json: @site
    else
      render json: @site.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @site = Site.find(params[:id])
    @site.destroy
    redirect_to user_path(current_user)
  end

  private

  def site_params
    params.require(:site).permit(
      [
      :user_id,
      :name,
      :address,
      :city,
      :description,
      :lat,
      :image,
      windows_attributes: %I[
        id
        photo
        _destroy
      ]
    ]
    )
  end
end
