import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
        <div className='text-center p-3' style={{ backgroundColor: 'beige', marginTop:'55px'}}>
            <h1>NewsInsight</h1>
            <h4>About</h4>
        </div>
        <div className="about-body">
          <p className="text-center p-2"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit!</b></p>
          <p className="px-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat totam itaque eligendi at nulla mollitia voluptate excepturi quibusdam incidunt. Impedit?</p>
          <p className="px-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis non facere repellendus. Quo, voluptas voluptatem? At inventore, velit, nihil culpa sunt, labore dolor saepe optio eveniet possimus officiis atque autem facere praesentium voluptates rerum. Voluptatibus excepturi reprehenderit veniam ipsum animi obcaecati. Aliquam voluptas pariatur, laboriosam veritatis quis est laborum maxime!</p>
        </div>


      </div>
    )
  }
}

export default About