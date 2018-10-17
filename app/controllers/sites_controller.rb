class SitesController < ApplicationController
  #skip_before_action :verify_authenticity_token, if: :json_request?

  def index
    @sites = Site.all
    render json: @sites
  end

  def show
    @site = Site.find(params[:id])
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
  end

  private

  def json_request?
    request.format.json?
  end

  def site_params
    params.require(:site).permit(
      [
      #:user_id,
      :name,
      :address,
      :city,
      :description,
      :lat,
      :lng,
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
