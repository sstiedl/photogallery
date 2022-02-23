<template>
<div >


  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>

    <div v-if="error">{{ error }}</div>
  </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore} from 'vuex'
import { useRouter} from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore();
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        })
        router.push('/')
      } catch (err) {
        error.value = err.message
      }
    };

    return { handleSubmit, email, password, error }
  }
}
</script>

<style scoped>
form {
  margin: 30px auto 10px;
  text-align: center;
}
label{
  display: block;
  width: 150px;
  height: 30px;
  margin:  auto;
  line-height: 30px;
  color: var(--primary);
  font-weight: bold;
}
label input {
  height: 0;
  width: 0;
  opacity: 0;
}
button {
  display: block;
  width: 150px;
  height: 30px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  margin: 10px auto;
  line-height: 30px;
  color: var(--primary);
  font-weight: bold;
}
button:hover {
  background: var(--primary);
  color: white;
}
.output {
  height: 40px;
  font-size: 0.8rem;
}
.error {
  color: var(--error);
}

</style>