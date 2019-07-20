import React, { useState } from "react";
import Begin from "./beginning";
import First from "./first-question";
import Second from "./second-question";
import Third from "./third-question";
import Finish from "./final-screen";

import validateapi from "./validate.api";
import apiData from "../data";

const QUEST_BEGIN = "BEGINNING";
const QUEST_FIRST = "FIRST";
const QUEST_SECOND = "SECOND";
const QUEST_THIRD = "THIRD";
const FINISH = "FINISH";

const QUEST = {
  FIRST: {
    validate: function(first, callback) {
      return new Promise((resolve, reject) => {
        validateapi(first)
          .then(response => {
            if (response.status === 200) {
              response.json().then(data => {
                if (data.city.name) {
                  callback(data.city.name);
                }
                resolve(true);
              });
            } else {
              reject(false);
            }
          })
          .catch(err => {
            reject(false);
          });
      });
    }
  },
  SECOND: {
    validate: function(second, callback) {
      return new Promise((resolve, reject) => {
        validateapi(second)
          .then(response => {
            if (response.status === 200) {
              response.json().then(data => {
                if (data.length > 0) {
                  callback(`${data[0].name} - ${data[0].code}`);
                }
                resolve(true);
              });
            } else {
              reject(false);
            }
          })
          .catch(err => {
            reject(false);
          });
      });
    }
  },
  THIRD: {
    validate: function(third) {
      return new Promise((resolve, reject) => {
        validateapi(third)
          .then(response => {
            if (response.status === 200) {
              resolve(true);
            } else {
              reject(false);
            }
          })
          .catch(err => {
            reject(false);
          });
      });
    }
  },
  FINISH: {
    type: "done"
  }
};

function Questions() {
  const [current, setCurrent] = useState(QUEST_BEGIN);
  const [data, setData] = useState({});

  function loadNextComponent(component, validate) {
    if (validate) {
      if (QUEST[validate] && QUEST[validate].validate) {
        if (validate === QUEST_FIRST) {
          QUEST[validate]
            .validate(apiData[validate], city => {
              setData({
                city
              });
            })
            .then(() => setCurrent(component));
        } else if (validate === QUEST_SECOND) {
          QUEST[validate]
            .validate(apiData[validate], airport => {
              setData({
                ...data,
                airport
              });
            })
            .then(() => setCurrent(component));
        } else if (validate === QUEST_THIRD) {
          QUEST[validate]
            .validate(apiData[validate])
            .then(() => setCurrent(component));
        }
      }
    } else {
      setCurrent(component);
    }
  }

  return (
    <div className="container">
      <div className="ml-56">
        <div className="w-10/12">
          {current !== "FINISH" && (
            <div className="">
              {current === QUEST_BEGIN && <Begin next={loadNextComponent} />}
              {current === QUEST_FIRST && <First next={loadNextComponent} />}
              {current === QUEST_SECOND && (
                <Second city={data.city} next={loadNextComponent} />
              )}
              {current === QUEST_THIRD && (
                <Third airport={data.airport} next={loadNextComponent} />
              )}
            </div>
          )}
          {current === FINISH && <Finish />}
        </div>
      </div>
    </div>
  );
}

export default Questions;
