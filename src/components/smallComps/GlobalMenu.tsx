import React from 'react'
import {
    MenuBar,
  } from "../../styles/components/Header";




function GlobalMenu({id}) {
    return (
        <MenuBar id={id}>
        <h5>GENERAL</h5>
        <button>About</button>
        <button> Advertisers </button>
        <button> Blog </button>
        <button> Developers </button>
        <button> Download Apps </button>
        <button> Gift Card </button>
        <button> IGDB </button>
        <button> Jobs </button>
        <button> Partners </button>
        <button> Music on Twitch </button>
        <button> Loot Cave - Store </button>
        <button> Press </button>
        <button> Turbo </button>
      </MenuBar>
    )
}

export default GlobalMenu
