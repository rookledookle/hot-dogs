class UserMatchesController < ApplicationController

  def index
    @user_match = UserMatch.find(params[:id])
  end

  def accept_match
    @match = UserMatch.find(params[:id])
    match_data = params[:match_data]
    @match.status = match_data[:status]
    @match.save
    render json: @match
  end

  def reject_match
    @match = UserMatch.find(params[:id])
    match_data = params[:match_data]
    @match.destroy
    @match.save
    render json: @match
  end
end