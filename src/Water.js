import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/water.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'


function Water() {

  // drinks.sort(
  //   (first, second) => {
  //     return first.name > second.name
  //   }
  // )

  return (
    <div id="water-container">
      <Container id="water-header">
      <div>
        <FontAwesomeIcon icon={faCocktail} id='fire-icon'/>
      </div>
        <div id="water">
          Flammable Water
        </div>
      </Container>
      <Container className="drinks-container">
        {drinks.map((drink, idx) => (
          <div className='drink' key={idx}>
            <div className='drink-name'>
              {drink.name}
            </div>
            <div className="ingredients-container">
              {drink.ingredients.map((ingredient, ing_idx) => (
                <div className='ingredient' key={ing_idx}>
                  {ingredient}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

const drinks = [
  {
    "name": "mint mojito",
    "ingredients": ["white rum", "simple syrup", "lime juice", "mint", "club soda"]
  },
  {
    "name": "aperol spritz",
    "ingredients": ["aperol", "prosecco", "orange slice"]
  },
  {
    "name": "vodka spritz",
    "ingredients": ["vodka", "cranberry juice", "lemon juice", "simple syrup", "club soda", "strawberries to garnish"]
  },
  {
    "name": "berry bramble",
    "ingredients": ["white rum", "berry syrup", "lemon juice"]
  },
  {
    "name": "gin & tonic",
    "ingredients": ["gin", "tonic water", "lime wedge"]
  },
  {
    "name": "tequila sunrise",
    "ingredients": ["tequila", "orange juice", "grenadine"]
  },
  {
    "name": "elderflower gimlet",
    "ingredients": ["elderflower liquer", "gin (or vodka)", "simple syrup", "lime juice", "cucumber to garnish"]
  },
  {
    "name": "elderflower spritz",
    "ingredients": ["elderflower liquer", "prosecco"]
  },
  {
    "name": "lavender collins",
    "ingredients": ["gin", "lavender syrup", "lemon juice", "club soda"]
  },
  {
    "name": "crimson smash (inspired by bopomofo)",
    "ingredients": ["white rum", "grapefruit soda", "mint", "lime juice", "blood orange slice"]
  },
  {
    "name": "daiquiri",
    "ingredients": ["white rum", "simple syrup", "lime juice"]
  },
  {
    "name": "mimosa",
    "ingredients": ["prosecco", "orange juice"]
  },
  {
    "name": "fuzzy navel",
    "ingredients": ["peach schnapps", "orange juice"]
  },
  {
    "name": "georgia peach",
    "ingredients": ["peach schnapps", "white rum", "orange juice", "lime juice", "cranberry juice"]
  },
  {
    "name": "sex on the beach",
    "ingredients": ["vodka", "peach schnapps", "cranberry juice", "orange juice", "lime wedge"]
  },
  {
    "name": "whiskey sour",
    "ingredients": ["whiskey", "lemon juice", "simple syrup", "egg white"]
  },
  {
    "name": "green tea shot",
    "ingredients": ["whiskey", "sour mix", "peach schnapps", "sprite"]
  },
  {
    "name": "lavender french 75",
    "ingredients": ["gin", "sparkling wine", "lemon juice", "simple syrup", "lavendar syrup"]
  },
]

export default Water