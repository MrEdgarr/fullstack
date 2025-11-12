<template>
    <div class="container">
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea error voluptatibus, dolorem
            vel, saepe unde eveniet laudantium quibusdam illo consequatur, quaerat consequuntur et
            perferendis nobis! Quisquam quas dicta mollitia facilis?
        </div>
        <div>
            <!-- Hoặc với custom prefix (nếu bạn đặt prefix: 'icon') -->
            <IconMdiAccount />
            <IconMdiHome />
            <!-- Icon với size và color -->
            <IconMdiAccount color="#ff0000" />
            <IconMdiAccount :width="24" :height="24" color="#ff0000" />
            <!-- Icon với class CSS -->
            <IconMdiBell />

            <!-- Icon với style inline -->
            <IconMdiHome />
        </div>
    </div>
</template>
<script setup></script>
