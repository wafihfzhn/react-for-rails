class PagesController < ApplicationController
  def index
  end

  def episodes
    @episodes = Course.first.episodes

    render json: { data: @episodes }
  end
end
