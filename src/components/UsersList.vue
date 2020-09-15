<template>
    <div>
        <ul>
            <UsersListUser 
            v-for="(user, i) in users"
             :key="i"
             :user="user"/> <!-- :key -> Faut que ce soit unique -->
        </ul>
    </div>
</template>

<script>
import UsersListUser from './UsersListUser' 

export default {
    props:{
        users: {
            type: Array
        }
    },
    components: {
        UsersListUser
    }
}
</script>