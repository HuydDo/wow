# World of Warcraft Application
This React Redux app used Rails API for backend and React for frontend.  It will be run in local dev environment with postgreSql database.

## Prerequisites
The setups steps expect following tools installed on the system.

  Github
  Ruby 2.6.1,
  Rails 6.0.2,
  npm 6.14.4,
  node v10.16.2

  Check your Ruby version
  `ruby -v`
  The output should start with something like ruby 2.6.1
  
  If not, install the right ruby version using rbenv

  ```rbenv install 2.5.1```

  Check your Rails version
  `rails -v`
  The ouput should start with something like 
  Rails 6.0.1

  Check your Yarn version
  `yarn -v`
  The ouput should start with something like
  1.21.1
  
    
## Installation 
1. Check out the repository
   `git clone git@github.com:HuydDo/wow.git`
   Open terminal then change dir to 
   `cd wow-backend`, then run   
   `rails db:migrate`,
   `rake db:setup`
   `rails db:seed [optional]`,
   `rails s`

2. Open the different terminal and change dir to wow-frontend then run `npm install`, then `npm start` or 
`yarn start`

## Usage
  If you use seed file for database, there are couple players/character were created.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/HuydDo/wow. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

```
index
  |__App
	|__NavBar
	|   |__Logout
	|__Home
	|__About
	|__Login
	|__Signup
	|__PlayersContainer
  		|__Player
  		|     |__CharactersContainer
  		|     |		|__CharacterInput
  		|     |		|__Characters
  	    |     |	         |__Character
  		|     |__PlayerInput	
  		|__Players
