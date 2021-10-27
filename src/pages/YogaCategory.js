import { React, useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import Navbar from "../navbar";

const YogaCategory = () => {
  return (
    <div>
      <Navbar />

      <div className="cardio-page d-flex">
        <div className="col-12 col-lg-2 cardio-sidebar">
          <ul className="cardio-ul">
            <li className="cardio-li">
              <a href="#headstand" className="cardio__link active-link">
                HEADSTAND
              </a>
            </li>
            <li className="cardio-li">
              <a href="#shoulderstand" className="cardio__link active-link">
                SHOULDERSTAND
              </a>
            </li>
            <li className="cardio-li">
              <a href="#plough" className="cardio__link active-link">
                PLOUGH
              </a>
            </li>
            <li className="cardio-li">
              <a href="#fish" className="cardio__link active-link">
                {" "}
                FISH
              </a>
            </li>
            <li className="cardio-li">
              <a href="#bend" className="cardio__link active-link">
                SITTING FORWARD BEND
              </a>
            </li>
            <li className="cardio-li">
              <a href="#cobra" className="cardio__link active-link">
                COBRA
              </a>
            </li>
            <li className="cardio-li">
              <a href="#locust" className="cardio__link active-link">
                LOCUST
              </a>
            </li>
            <li className="cardio-li">
              <a href="#bow" className="cardio__link active-link">
                BOW
              </a>
            </li>
            <li className="cardio-li">
              <a href="#half" className="cardio__link active-link">
                HALF SPINAL TWIST
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-10 cardio-data">
          <section id="headstand">
            <h1>HEADSTAND</h1>
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/1.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <p className="cardio-para">
                  An āsana in which you balance on your elbows, arms and head
                </p>
                <h3 className="text-center">śīrṣa = head</h3>
                <p className="cardio-para">
                  Known as the "King of āsanas" because of its many benefits,
                  the Headstand is the first in the sequence. In the words of
                  Swami Sivananda, “Head-stand is a panacea, a cure-all, a
                  sovereign specific for all diseases.”
                </p>
                <h3 className="text-center">How to do:</h3>
                <p className="cardio-para">
                  Being upside down in this āsana helps the brain to draw
                  abundant oxygen-rich blood from the heart. It is beneficial
                  for memory and concentration, thereby helping with meditation
                  practice. This posture facilitates better energy flow to the
                  head area. The headstand energises the ājñā cakra and also
                  channels energy to the maṇipūra cakra.
                </p>
              </div>
            </div>
          </section>
          <hr />
          <br />
          <section id="shoulderstand">
            <h1>SHOULDERSTAND</h1>
            <br />
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/2.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <h3 className="text-center"> SARVĀṄGĀSANA – SHOULDERSTAND</h3>
                <p className="cardio-para">
                  An inverted pose, with the body resting on the shoulders
                </p>
                <h3 className="text-center">Sarva = complete</h3>
                <p className="cardio-para">
                  Considered to be the “Queen of āsanas”, Sarvangāsana
                  strengthens the entire body. In this posture, the chin is
                  pressed against the throat because of which the thyroid gland
                  is regulated which in turn balances all other glands in the
                  body assuring healthy functioning of all the body systems and
                  organs.
                </p>

                <p className="cardio-para">
                  The Shoulderstand removes the energy blockages from the neck
                  area and relieves stress in the neck and shoulder region. It
                  directs the energy to the solar plexus and stimulates the
                  viśuddha cakra.
                </p>
              </div>
            </div>
          </section>
          <hr />
          <br />

          <section id="plough">
            <h1>PLOUGH</h1>
            <br />
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/3.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <h3 className="text-center">HALĀSANA – PLOUGH</h3>
                <p className="cardio-para">
                  A pose with hands and feet on the floor resembling a plough
                </p>
                <p className="cardio-para">
                  It's name is derived from the Sankrit word hala meaning
                  plough. Halasana tones and invigorates the spine and corrects
                  exaggerated lower back curvature (lordosis). It relieves
                  problems like indigestion and constipation as the abdominal
                  organs are massaged.
                </p>

                <p className="cardio-para">
                  It removes energy blocks from the neck and back area. The
                  maṇipūra cakra or the solar plexus is energised in this
                  posture.
                </p>
              </div>
            </div>
          </section>
          <hr />
          <br />

          <section id="fish">
            <h1>FISH</h1>
            <br />
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/4.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <h3 className="text-center"> MATSYĀSANA – FISH</h3>
                <p className="cardio-para">
                  Resting on the arms, arching the back and expanding the chest
                  matsya = fish
                </p>
                <p className="cardio-para">
                  By adopting this posture, one will be able to float in water
                  like a fish, hence the name matsyāsana. This posture helps
                  overcoming respiratory ailments like chronic bronchitis and
                  asthma by promoting increased lung capacity and easier
                  breathing.
                </p>

                <p className="cardio-para">
                  Matsyāsana removes stiffness from the cervical, thoracic and
                  lumbar regions, bringing an increase of blood a supply to
                  these parts. The parathyroid, pituitary and pineal glands are
                  stimulated. The anāhata cakra is activated in this posture and
                  energy blockages are removed from the throat and neck region.
                </p>
              </div>
            </div>
          </section>

          <hr />
          <br />

          <section id="bend">
            <h1>SITTING FORWARD BEND</h1>
            <br />
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/5.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <h3 className="text-center">
                  {" "}
                  PAŚCIMOTTĀNĀSANA - SITTING FORWARD BEND
                </h3>
                <p className="cardio-para">
                  Stretching the spine forward paścima = west (the back of body)
                  uttāna = stretched out
                </p>

                <p className="cardio-para">
                  This simple looking posture is one of the most powerful and
                  important of all the postures. It helps to ease the spinal
                  compression caused by standing upright. Continued practice
                  contributes greatly toward keeping the back supple, joints
                  mobile, nervous system invigorated, and internal organs toned.
                  It also helps in preventing diabetes by giving a natural
                  massage to the pancreas. Paścimottānāsana releases the
                  energies in the main nāḍīs (astral tubes) along the spine. It
                  stimulates the maṇipūra cakra.
                </p>
              </div>
            </div>
          </section>
          <hr />
          <br />

          <section id="cobra">
            <h1>COBRA</h1>
            <br />
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/6.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <h3 className="text-center"> BHUJAṄGĀSANA - COBRA</h3>

                <p className="cardio-para">
                  Arching the upper body and expanding the chest bhujanga =
                  cobra
                </p>

                <p className="cardio-para">
                  This is the first of the three backward bending postures in
                  the series. The arching of the spine in this posture increases
                  flexibility, rejuvenates spinal nerves and brings a rich blood
                  supply to the spine. It strengthens the neck and upper back.
                </p>

                <p className="cardio-para">
                  The Cobra is especially beneficial for women as it relieves
                  menstrual problems by exerting pressure on the pelvic organs.
                  The powerful contraction stimulates the maṇipūra cakra which
                  channels energy to the rest of the body.
                </p>
              </div>
            </div>
          </section>

          <hr />
          <br />
          <section id="locust">
            <h1>LOCUST</h1>
            <br />
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/7.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <h3 className="text-center"> ŚALABHĀSANA - LOCUST</h3>
                <p className="cardio-para">
                  Lying on the front with lifted legs śalabha = locust{" "}
                </p>

                <p className="cardio-para">
                  Śalabhāsana facilitates intestinal function, strengthens the
                  abdominal walls and relieves sluggish digestion. The backward
                  bending of the spine in this posture promotes flexibility of
                  the cervical region and relieves lower back pain and sciatica.{" "}
                </p>

                <p className="cardio-para">
                  This posture is very helpful in developing will power. The
                  stimulation of maṇipūra cakra in Śalabhāsana energises the
                  rest of the body.{" "}
                </p>
              </div>
            </div>
          </section>
          <hr />
          <br />
          <section id="bow">
            <h1>BOW</h1>
            <br />
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/8.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <h3 className="text-center"> DHANURĀSANA - BOW</h3>
                <p className="cardio-para">
                  Balancing on the abdomen in the shape of a bow dhanur = bow
                </p>

                <p className="cardio-para">
                  Dhanurāsana combines and enhances the benefits of Cobra and
                  Locust postures. By working on the entire spine, this posture
                  brings flexibility to the cervical, thoracic, lumbar and
                  sacral regions. It massages and invigorates the digestive
                  organs which in turn helps relieving a host of ailments.
                </p>

                <p className="cardio-para">
                  Another beneficial āsana for women as it relieves menstrual
                  problems. The Bow stimulates the maṇipūra cakra and energises
                  the entire body.
                </p>
              </div>
            </div>
          </section>

          <hr />
          <br />
          <section id="half">
            <h1>HALF SPINAL TWIST</h1>
            <br />
            <hr />
            <div className="cardio-content d-flex">
              <div className="col-12 col-lg-4">
                <img src="images/9.gif" alt="" />
              </div>
              <div className="col-12 col-lg-8">
                <h3 className="text-center">
                  {" "}
                  ARDHA MATSYENDRĀSANA – HALF SPINAL TWIST
                </h3>

                <p className="cardio-para">
                  A twist for the entire spine ardha = half matsya = fish eendra
                  = king{" "}
                </p>

                <p className="cardio-para">
                  This āsana is named after the great yogi Matsyendranath. Half
                  Spinal Twist mobilizes the vertebrae by rotating them in both
                  directions, enhancing the mobility of the spine.
                </p>

                <p className="cardio-para">
                  The abdominal organs receive a deep massage in this posture,
                  thereby relieving digestive problems. This posture allows a
                  nourishing fresh blood supply to reach the roots of the spinal
                  nerves and the sympathetic nervous system. Ardha
                  Matsyendrāsana balances the left and right sided nāḍīs (astral
                  tubes).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default YogaCategory;
