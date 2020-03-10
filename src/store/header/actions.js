export function openMenu({ commit }) {
  commit("UPDATE_MENU");
}


export function updateBottomContacts({ commit }) {
  commit("UPDATE_BOTTOM_CONTACTS");
}


export function updateParticle({ commit }, paylaod) {
  commit("UPDATE_VISIBLE_PARTICLE", paylaod);
}