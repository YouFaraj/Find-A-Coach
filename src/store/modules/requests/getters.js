export default {
  requests(state, rootgetters) {
    const coachId = rootgetters.userId
    return state.requests.filter( req => req.coachId === coachId)
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0
  }
}