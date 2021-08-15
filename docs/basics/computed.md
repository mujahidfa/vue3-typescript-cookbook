<script setup>
import Tab from '../../../components/Tab.vue'
</script>

# Computed
Computed types are inferred, so you don't need to define them explicity. However, if you wish to do so, here's how:

## Regular Computed
There are 3 ways to type a computed property:
```ts
import { ref, computed, ComputedRef } from "vue"

const firstName = ref("Mujahid");
const lastName = ref("Anuar");

// Method 1: recommended
const fullName1 = computed<string>(
  () => `${firstName.value} - ${lastName.value}`
);

// Method 2
const fullName2: ComputedRef<string> = computed(
  () => `${firstName.value} - ${lastName.value}`
);

// Method 3
const fullName3 = computed(
  (): string => `${firstName.value} - ${lastName.value}`
);

// Or, a mix of all 3
const fullName4: ComputedRef<string> = computed<string>(
  (): string => `${firstName.value} - ${lastName.value}`
);
```

## Computed Getters and Setters
There are 2 ways to type a computed getter and setter:
```ts
import { ref, computed, WritableComputedRef } from "vue";

const count = ref(1);

// Method 1: recommended
const plusOne = computed<number>({
  get: (): number => count.value + 1,
  set: (val: number): void => {
    count.value = val - 1;
  },
});

// Method 2
const plusTwo: WritableComputedRef<number> = computed({
  get: (): number => count.value + 2,
  set: (val: number): void => {
    count.value = val - 2;
  },
});
```