import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Digital Assistant</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div class="columns is-mobile ">
            <div class="column is-4 ">
              <ProfileCard
                image={AlexaImage}
                title="alexa"
                handle="@alexa37"
                description="Alexa was created by Amazon "
              />
            </div>
            <div class="column is-4  ">
              <ProfileCard
                image={CortanaImage}
                title="cortana"
                handle="@cortana98"
                description="Cortana was created by Microsoft for windows"
              />
            </div>
            <div class="column is-4 ">
              <ProfileCard
                image={SiriImage}
                title="siri"
                handle="@siri02"
                description="Siri was created by Apple"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
