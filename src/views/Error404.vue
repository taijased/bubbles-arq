<template lang="pug">
    .error
      .error-title 404
      .error-subtitle There is no such page
      .btn-error(@click="$router.go(-1)") Return back
</template>


<style lang="stylus" scoped>
$time-description = .3s
$primary-color = #4737D6
.error {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .error-title {
        color: $primary-color;
        font-family: 'TT Norms Bold';
        line-height: normal;
        font-size: 200px;
    }
    .error-subtitle {
        font-family: 'TT Norms Medium'
        line-height: normal;
        font-size: 26px;
        color: #000;
    }
    .btn-error {
        font-family: 'TT Norms Regular';
        background: $primary-color;
        border-radius: 40px;
        padding: 10px 20px;
        color: white;
        margin-top: 30px;
        transition: background $time-description ease-in;
        &:hover {
            cursor: pointer;
            background: rgba(55, 69, 214, 0.7);
            transition: background $time-description ease-in;
        }
    }
}
</style>
