import Signup from "./Auth/Signup";

const Landing = () => {
  return(
    <section className="landing">
      <div className="container mx-auto grid grid-cols-2 gap-2 h-[32rem] items-center">
      <div className="landing-focus">
        <h1>Hello!</h1>
        <h3>This is a Social media website</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste placeat, inventore officiis eum sint dolores magnam repellendus voluptate alias modi molestias odit perspiciatis ut blanditiis, consequatur rem adipisci vel!</p>
      </div>
      <Signup/>
      </div>
    </section>
  )
}

export default Landing;