<template>
  <div class="recipe">
    <img src="../../../afx/afx_demeters_necklace_2.png" alt="" />
    <p>5</p>
    <img src="../../../afx/afx_the_chalice_1.png" alt="" />
    <p>2</p>
    <img src="../../../icons/arrow.png" alt="" />
    <img src="../../../afx/afx_demeters_necklace_3.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "DemetersNecklace3",
};
</script>

<style>
.recipe {
  display: flex;
  justify-content: flex-end;
  background-color: #4c4c4c;
  margin: 1rem;
  border-radius: 1rem;
  max-width: fit-content;
}
img {
  width: 5rem;
  height: 5rem;
}
p {
  margin-bottom: 0;
  font-size: 2rem;
}
</style>
