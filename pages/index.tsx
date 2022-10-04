import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <section className="container text-center pb-5">
        <section className="message-list">
          <section className="message -left">
            <i className="nes-bcrikko"></i>
            <div className="nes-balloon from-left">
              <p>
                Hello Friend, i am Wordy! <br />
                How can i help you?
              </p>
            </div>
          </section>
        </section>
      </section>
      <div className="row text-center">
        <div className="col-12 ">
          <div className="nes-container with-title">
            <p className="title">Create a room?</p>
            <button type="button" className="nes-btn is-success my-4">
              Yes! I want to create a Room!
            </button>
          </div>
        </div>
        <div className="col-12 py-5">
          <h4>or</h4>
        </div>
        <div className="col-12 ">
          <div className="nes-container  with-title">
            <p className="title">Join a room?</p>
            <div className="row">
              <div className="col-10">
                <div className="nes-field py-4">
                  <input type="text" id="name_field" className="nes-input" />
                </div>
              </div>
              <div className="col-2">
                <button type="button" className="nes-btn is-primary my-4">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
