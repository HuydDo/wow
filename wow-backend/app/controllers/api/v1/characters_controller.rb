class Api::V1::CharactersController < ApplicationController

  before_action :set_player, only: [:index, :show, :create]

  def index
    character = @player.characters
    render json: character
  end

  def show
    character = Character.find(params[:id])
    # character = @player.characters.find_by(id: params[:id])
    render json: character
  end

  def create
    character = @player.characters.new(character_params)
    # character = Character.new(character_params)
    if character.save
      render json: character
    else
      render json: {error: 'Fail to create character'}
    end
  end

  def destroy
    character = Character.find(params[:id])
    character.destroy
  end

  def set_player
    @player = Player.find(params[:account_id])
  end

  private

  def character_params
    params.require(:character).permit(:gender, :name, :race, :character_class, :player_id)
  end
 
end



