class Api::V1::CharactersController < ApplicationController

  before_action :set_player, only: [:index, :show, :create]

  def index
    # binding.pry
    # if @player
    #   characters = @player.characters
    # else 
      characters = Character.all
    # end
    render json: characters
  end

  def show
    character = Character.find(params[:id])
    # character = @player.characters.find_by(id: params[:id])
    render json: character
  end

  def create
    # binding.pry
    character = @player.characters.new(character_params)
    # character = Character.new(character_params)
    if character.save
      # render json: character
      render json: @player
    else
      render json: {error: 'Fail to create character'}
    end
  end

  def destroy
    character = Character.find(params[:id])
    player = Player.find(character.player_id)
    if player
      character.destroy
      render json: player
    else
      render json: {error: 'Fail to delete character'}
    end
  end

  def set_player
    @player = Player.find(params[:player_id])
  end

  private

  def character_params
    params.require(:character).permit( :name, :gender, :race, :character_class, :player_id)
  end
 
end




