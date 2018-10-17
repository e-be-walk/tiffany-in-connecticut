export const fetchSites = () => {
  return (dispatch) => {
        dispatch({ type: 'LOADING_SITES' });
        return fetch('http://localhost:3001/sites')
            .then(response => response.json())
            .then(discussions => dispatch({type: 'FETCH_SITES', payload: sites }));
    }
};
