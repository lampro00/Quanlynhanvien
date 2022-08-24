import * as AT from "./ationTypes";
import { baseUrl } from "../shared/baseUrl";

/*DISHES ACTIONS*/

export const addDishes = (dishes) => ({ type: AT.ADD_DISHES, payload: dishes });

export const dishesFailed = (err) => ({ type: AT.DISHES_FAILED, payload: err });

export const dishesLoading = () => ({ type: AT.DISHES_LOADING });

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var err = new Error(
            `Error: ${response.status}: ${response.statusText} `
          );
          throw err;
        }
      },

      (err) => {
        throw new Error(err.message);
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => dispatch(dishesFailed(err.message)));
};

/*COMMENTS ACTIONS*/

export const addComment = (comment) => ({
  type: AT.ADD_COMMENT,
  payload: comment,
});

export const addComments = (comments) => ({
  type: AT.ADD_COMMENTS,
  payload: comments,
});

export const commentsFailed = (err) => ({
  type: AT.COMMENTS_FAILED,
  payload: err,
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var err = new Error(
            `Error: ${response.status}: ${response.statusText} `
          );
          throw err;
        }
      },

      (err) => {
        throw new Error(err.message);
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((err) => dispatch(commentsFailed(err.message)));
};

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId,
    rating,
    author,
    comment,
    date: new Date().toISOString(),
  };

  return fetch(`${baseUrl}comments`, {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var err = new Error(
            `Error: ${response.status}: ${response.statusText} `
          );
          throw err;
        }
      },

      (err) => {
        throw new Error(err.message);
      }
    )
    .then((response) => response.json())
    .then((comment) => dispatch(addComment(comment)))
    .catch((err) => {
      console.log(`Post error: ${err.message}`);
      alert("Error on post comment");
    });
};

/*PROMOS ACTIONS*/

export const addPromos = (promos) => ({
  type: AT.ADD_PROMOS,
  payload: promos,
});

export const promosFailed = (err) => ({
  type: AT.PROMOS_FAILED,
  payload: err,
});

export const promosLoading = () => ({ type: AT.PROMOS_LOADING });

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());
  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var err = new Error(
            `Error: ${response.status}: ${response.statusText} `
          );
          throw err;
        }
      },

      (err) => {
        throw new Error(err.message);
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((err) => dispatch(promosFailed(err.message)));
};

/*LEADERS ACTIONS*/

export const addLeaders = (leaders) => ({
  type: AT.ADD_LEADERS,
  payload: leaders,
});

export const leadersFailed = (err) => ({
  type: AT.LEADERS_FAILED,
  payload: err,
});

export const leadersLoading = () => ({ type: AT.LEADERS_LOADING });

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  return fetch(baseUrl + "leaders")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var err = new Error(
            `Error: ${response.status}: ${response.statusText} `
          );
          throw err;
        }
      },

      (err) => {
        throw new Error(err.message);
      }
    )
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((err) => dispatch(leadersFailed(err.message)));
};

/*FEEDBACK ACTIONS*/

export const postFeedback = (values) => (dispatch) => {
  const newFeedback = {
    ...values,
    date: new Date().toISOString(),
  };

  return fetch(`${baseUrl}feedback`, {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var err = new Error(
            `Error: ${response.status}: ${response.statusText} `
          );
          throw err;
        }
      },

      (err) => {
        throw new Error(err.message);
      }
    )
    .then((response) => response.json())
    .then((feedback) =>
      alert(`Feedback from server --> ${JSON.stringify(feedback)}`)
    )
    .catch((err) => {
      console.log(`Post form error: ${err.message}`);
      alert(`Form error: ${err.message}`);
    });
};
