const readline = require('readline-sync')



let player_chips = 0
let cards_origin = []
let card_names = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8','7','6','5','4','3','2']
let card_suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
let continue_on = true

function shuffle_deck(arr) {
    arr.sort(()=> Math.random()-0.5)
}

function get_card(cards) {
    let card = cards.pop()
    return card
}


for (card_name of card_names){
    for (card_suit of card_suits){
        let card_value = parseInt(card_name)
        if (card_name == 'Queen' || card_name == 'King' || card_name == 'Jack' || card_name ==  '10'){
            card_value = 0
        } 
        if (card_name == 'Ace'){
            card_value = 1
        } 

        card = {'card_name': card_name, 'card_suit': card_suit, 'card_value':card_value}
        cards_origin.push(card)

    }
}

while (continue_on) {
    let player_Cards = []
    let dealer_Cards = []
    let player_bet = readline.question(("Please put your bet\n"))

    cards = cards_origin
    shuffle_deck(cards)
    player_Cards.push(get_card(cards))
    player_Cards.push(get_card(cards))

    let player_card_1_value = player_Cards[0]['card_value']
    let player_card_2_value = player_Cards[1]['card_value']
    let player_score = player_card_1_value+player_card_2_value

    console.log('You got',player_Cards[0]['card_suit']+'-'+player_Cards[0]['card_name']+', '+player_Cards[1]['card_suit']+'-'+player_Cards[1]['card_name'])


    dealer_Cards.push(get_card(cards))
    dealer_Cards.push(get_card(cards))

    let dealer_card_1_value = dealer_Cards[0]['card_value']
    let dealer_card_2_value = dealer_Cards[1]['card_value']
    let dealer_score = dealer_card_1_value+dealer_card_2_value
    console.log('The dealer got',dealer_Cards[0]['card_suit']+'-'+dealer_Cards[0]['card_name']+', '+dealer_Cards[1]['card_suit']+'-'+dealer_Cards[1]['card_name'])



    if (player_score > dealer_score && player_score != 8 && dealer_score != 8 && player_score != 9 && dealer_score != 9){

        console.log('You won!!!, received',player_bet,'chips')
        player_chips += parseInt(player_bet)
    }
    else if (player_score < dealer_score && player_score != 8 && dealer_score != 8 && player_score != 9 && dealer_score != 9){

        console.log('You lost!!!, lost',player_bet,'chips')
        player_chips -= parseInt(player_bet)
    }
    else if (player_score == 8 && dealer_score != 8 && dealer_score != 9) {
        console.log('You won!!!, received',player_bet,'chips')
        player_chips += parseInt(player_bet)
    }

    else if (player_score == 9 && dealer_score != 9) {
        console.log('You won!!!, received',player_bet,'chips')
        player_chips += parseInt(player_bet)
    } 
    else if (player_score != 9 && player_score != 8 && dealer_score == 8) {
        console.log('You lost!!!, lost',player_bet,'chips')
        player_chips -= parseInt(player_bet)
    }

    else if (player_score != 9 && dealer_score == 9) {
        console.log('You lost!!!, lost',player_bet,'chips')
        player_chips -= parseInt(player_bet)
    }
    else {
        console.log('tie!! received nothing')
    }
    let player_answer = readline.question(("Wanna play more (Yes/No)?\n"))
    if (player_answer == 'Yes') {
        console.log('You got total',player_chips,'chips')
        continue_on = true
    } else {
        console.log('You got total',player_chips,'chips')
        continue_on = false
    }


}