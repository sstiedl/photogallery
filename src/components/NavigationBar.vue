<template>
  <nav>
    <!-- for all users -->
    <div>
      <router-link to="/" class="router">Home</router-link>
    </div>
    <!-- for logged in users -->
    <div v-if="user">
      <span id="logged"
        >Logged in as<span id="name">{{ user.email }}</span>
      </span>
      <button @click="handleLogout">Logout</button>
    </div>

    <!-- for logged out users -->
    <div v-if="!user">
      <router-link to="/login" class="router">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleLogout = () => {
      store.dispatch("logout");
      router.push("/");
    };

    return { handleLogout, user: computed(() => store.state.user) };
  },
};
</script>



<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 80%;
  margin: 0 auto;
  padding: 10px;
}
nav h1 {
  color: #c9c9c9;
  font-size: 3rem;
  margin-right: auto;
}
nav a,
nav button,
nav span {
  margin-left: 20px;
}

nav a {
  font-size: 1.5rem;
  color: #bbb;
  text-decoration: none;
}

nav a.router-link-active {
  color: teal;
  font-weight: bold;
}

.router{
  font-size: 1rem;
}

button {
  background: #f75151;
  border: 0;
  padding: 6px 10px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
}

#logged {
  font-style: italic;
}

#name {
  color: teal;
  font-weight: bold;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  nav {
    max-width: 99%;
  }
  nav h1 {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  nav {
    max-width: 99%;
  }
  nav h1 {
    display: none;
  }

  nav a {
    font-size: 0.7rem;
  }
  nav #logged {
    font-size: 0.7rem;
  }
}
</style>