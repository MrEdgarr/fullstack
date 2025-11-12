<template>
    <header>
        <div class="navbar container">
            <div class="navbar-start">
                <!-- Logo -->
                <div class="text-lg md:text-2xl font-semibold tracking-widest">𝘾𝓲𝓷𝓮𝙈𝓪𝔁</div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li v-for="value in MAIN_NAVIGATION" :key="value.name">
                        <template v-if="!value.childrenMenu">
                            <a class="hover:bg-transparent focus:bg-transparent">
                                {{ value.name }}
                            </a>
                        </template>
                        <template v-else>
                            <div
                                class="dropdown dropdown-hover hover:bg-transparent focus:bg-transparent"
                            >
                                <div tabindex="0" class="flex">
                                    {{ value.name }}
                                    <IconHeroiconsSolidChevronDown />
                                </div>

                                <ul
                                    tabindex="-1"
                                    class="dropdown-content menu bg-base-100 rounded-box left-0 top-8 z-1 w-40 m-0 shadow-sm"
                                >
                                    <li
                                        v-for="valueChildren in value.childrenMenu"
                                        :key="valueChildren.name"
                                    >
                                        <a>{{ valueChildren.name }}</a>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <button class="btn btn-link text-black font-normal cursor-pointer btn-circle">
                    <IconHeroiconsOutlineSearch />
                </button>
                <button class="btn btn-link text-black font-normal cursor-pointer hidden lg:flex">
                    Đăng nhập
                </button>
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="lg:hidden">
                        <IconHeroiconsBars3BottomRight16Solid />
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-90 mt-3 w-72 p-2 shadow"
                    >
                        <li><button class="btn rounded-4xl mb-5">Đăng nhập</button></li>
                        <li v-for="value in MAIN_NAVIGATION" :key="value.name">
                            <template v-if="!value.childrenMenu">
                                <a class="py-2">
                                    <component :is="value.icon"></component>
                                    {{ value.name }}
                                </a>
                            </template>
                            <template v-else>
                                <details close>
                                    <summary class="py-2">
                                        <component :is="value.icon"></component>
                                        {{ value.name }}
                                    </summary>
                                    <ul>
                                        <li
                                            v-for="valueChildren in value.childrenMenu"
                                            :key="valueChildren.name"
                                        >
                                            <a class="py-2">
                                                <component :is="valueChildren.icon"></component>
                                                {{ valueChildren.name }}
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { MAIN_NAVIGATION } from '@/constants/navigation'
</script>
<style lang=""></style>
