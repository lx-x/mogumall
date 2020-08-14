<template>
  <div class="wrapper">
    <b-scroll
      class="content"
      ref="scroll"
      :probe-type="probeType"
      @scroll="contentScroll"
    >
      <h2>我的</h2>
      <ul>
        <li>我的信息1</li>
        <li>我的信息2</li>
        <li>我的信息3</li>
        <li>我的信息4</li>
        <li>我的信息5</li>
        <li>我的信息6</li>
        <li>我的信息7</li>
        <li>我的信息8</li>
        <li>我的信息9</li>
        <li>我的信息10</li>
        <li>我的信息11</li>
        <li>我的信息12</li>
        <li>我的信息13</li>
        <li>我的信息14</li>
        <li>我的信息15</li>
        <li>我的信息16</li>
        <li>我的信息17</li>
        <li>我的信息18</li>
        <li>我的信息19</li>
        <li>我的信息20</li>
        <li>我的信息21</li>
        <li>我的信息22</li>
        <li>我的信息23</li>
        <li>我的信息24</li>
        <li>我的信息25</li>
        <li>我的信息26</li>
        <li>我的信息27</li>
        <li>我的信息28</li>
        <li>我的信息29</li>
        <li>我的信息30</li>
        <li>我的信息31</li>
        <li>我的信息32</li>
        <li>我的信息33</li>
        <li>我的信息34</li>
        <li>我的信息35</li>
        <li>我的信息36</li>
        <li>我的信息37</li>
        <li>我的信息38</li>
        <li>我的信息39</li>
        <li>我的信息40</li>
        <li>我的信息41</li>
        <li>我的信息42</li>
        <li>我的信息43</li>
        <li>我的信息44</li>
        <li>我的信息45</li>
        <li>我的信息46</li>
        <li>我的信息47</li>
        <li>我的信息48</li>
        <li>我的信息49</li>
        <li>我的信息50</li>
        <li>我的信息51</li>
        <li>我的信息52</li>
        <li>我的信息53</li>
        <li>我的信息54</li>
        <li>我的信息55</li>
        <li>我的信息56</li>
        <li>我的信息57</li>
        <li>我的信息58</li>
        <li>我的信息59</li>
        <li>我的信息60</li>
        <li>我的信息61</li>
        <li>我的信息62</li>
        <li>我的信息63</li>
        <li>我的信息64</li>
        <li>我的信息65</li>
        <li>我的信息66</li>
        <li>我的信息67</li>
        <li>我的信息68</li>
        <li>我的信息69</li>
        <li>我的信息70</li>
        <li>我的信息71</li>
        <li>我的信息72</li>
        <li>我的信息73</li>
        <li>我的信息74</li>
        <li>我的信息75</li>
        <li>我的信息76</li>
        <li>我的信息77</li>
        <li>我的信息78</li>
        <li>我的信息79</li>
        <li>我的信息80</li>
        <li>我的信息81</li>
        <li>我的信息82</li>
        <li>我的信息83</li>
        <li>我的信息84</li>
        <li>我的信息85</li>
        <li>我的信息86</li>
        <li>我的信息87</li>
        <li>我的信息88</li>
        <li>我的信息89</li>
        <li>我的信息90</li>
        <li>我的信息91</li>
        <li>我的信息92</li>
        <li>我的信息93</li>
        <li>我的信息94</li>
        <li>我的信息95</li>
        <li>我的信息96</li>
        <li>我的信息97</li>
        <li>我的信息98</li>
        <li>我的信息99</li>
        <li>我的信息100</li>
      </ul>
    </b-scroll>
  </div>
</template>

<script>
import BScroll from "../../components/common/scroll/Scroll";
export default {
  name: "Profile",
  data() {
    return {
      probeType: 3,
    };
  },
  components: {
    BScroll,
  },
  methods: {
    contentScroll(position) {
      console.log(position);
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: red;
  overflow: hidden;
}
</style>