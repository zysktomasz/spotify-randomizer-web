// solution: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

// eslint-disable-next-line
export const loadState: any = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// eslint-disable-next-line
export const saveState: (state: any) => void = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
