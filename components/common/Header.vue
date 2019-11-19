<template>
    <header class="header">
        <p class="header-logo">
            <Logo />
        </p>
    </header>
</template>
<script>
import Logo from '@/components/common/Logo'
export default {
    components: {
        Logo
    }
}
</script>
<style lang="scss" scoped>
.header {
    position: sticky;
    background-color: $color-white;
    border-bottom: 1px solid $color-border;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    &-logo {
        width: 120px;
    }
}
</style>
