class SitesController < ApplicationController

  def new
    @site = Site.new
  end

  def create
    @site = Site.create(site_params)
    if @site.valid?
      @site.save
    else
      flash[:message] = "Please ensure that your site has a name."
    end
  end

  def edit
    @site = Site.find(params[:id])
  end

  def update
    @site = Site.find(params[:id])
    @site.update(site_params)
    if @site.save
      redirect_to site_path(@site)
    else
      render :edit
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
      :user_id,
      :name,
      :address,
      :city,
      :description,
      :lat,
      :image
    )
end
