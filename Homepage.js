import React from 'react'
import "./App.css"
function Homepage() {
  return (
    <div className='App'>
      <center>

        <h1>Our Story</h1>
      </center>
       
       
        <p className="p">We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up
          with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved
          that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Everl</p>
        <p className="p">Ever since we launched the Tastlest Pan Pizza, ever, people have not been able to resist the softest, cheeslest, crunchiest, butteriest Domino's Fresh Pan
          Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
        </p>
        <p className="p">We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun
          excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh
          Pan Pizza is the Tastiest Pan Pizza, Everl
        </p>
      
      <nav id='Nav'>
        <div className='img1'>
          <img src="https://www.shutterstock.com/image-photo/raw-dough-pizza-ingredients-spices-260nw-526830277.jpg" alt="15,134,789 Ingredients Images, Stock Photos &amp; Vectors | Shutterstock" data-noaft="1" />
        </div>
        <div className='p1'>
          <h1>Ingredients</h1>
          <p>
            We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf
            (straight from the farm), or steaming a baby (carrot) Cut Cut Chop Chop Steam Steam. Stir Stir.
            While they're still young and fresh - that's our motto. It makes the kitchen a better place.
          </p>
        </div>
      </nav>
      <nav>
        <div className='img2'>
          <img src="https://acefoodhandler.com/wp-content/uploads/2018/07/photodune-8484435-four-chefs-preparing-food-at-counter-in-a-row-in-a-professional-kitchen-xxl-1.jpg" alt="15,134,789 Ingredients Images, Stock Photos" height={270} width={400} />
        </div>
        <div className='p2'>
          <h1>Our Chefs</h1>
          <p>
            They make sauces sing and salads dance. They create magic with skill,
            knowledge, passion, and stirring spoons (among other things) They
            make goodness so good, it doesn't know what to do with itself. We do
            though We send it to you.
          </p>
        </div>
      </nav>
      <nav>

        <div className='img3'>
          <img src="https://th.bing.com/th/id/OIP.8EGb5kogaV3I1qRHDTwEfgAAAA?w=133&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="15,134,789 Ingredients Images, Stock Photos " height={270} width={300} />
        </div>
        <div className='p3'>

          <h1>45 minutes delevery</h1>
        </div>
     
      </nav>

    </div>
  )
}
export default Homepage;