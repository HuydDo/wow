class Api::V1::PlayersController < ApplicationController

  def index
    player = Player.all
    render json: player
  end

  def create
    player = Player.new(player_params)
    if player.save
      render json: player
    else
      render json: {error: 'Fail to create player'}
    end
  end

  def show
    player = Player.find(params[:id])
    render json: player
  end

  def destroy
    # binding.pry
    player = Player.find(params[:id])
    if player
      player.destroy
      render json: player
    else
      render json: {error: 'Fail to delete player'}
    end
  end

  def update 
    player = Player.find(params[:id])
    player.update(name: params["player"]["name"])
    if player.save
      render json: player
    else
      render json: {error: 'Fail to update player'}
    end
  end
  
  private

  def player_params
    params.require(:player).permit(:name)
  end
end
