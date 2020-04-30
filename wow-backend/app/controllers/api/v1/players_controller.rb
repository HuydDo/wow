class Api::V1::PlayersController < ApplicationController
  
  before_action :set_player, only: [:show, :destroy, :update]

  def index
    player = Player.all
    render json: player
  end

  def create
    # binding.pry
    player = Player.new(player_params)
    if player.save
      render json: player
    else
      render json: {error: 'Fail to create player'}
    end
  end

  def show
    render json: @player
  end

  def destroy
    if @player
      @player.destroy
      render json: @player
    else
      render json: {error: 'Fail to delete player'}
    end
  end

  def update
    @player.update(name: params["player"]["name"])
    if @player.save
      render json: @player
    else
      render json: {error: 'Fail to update player'}
    end
  end
  

  private

  def set_player
    @player = Player.find(params[:id])
  end

 
  def player_params
    params.require(:player).permit(:name, :username, :password)
  end
end
