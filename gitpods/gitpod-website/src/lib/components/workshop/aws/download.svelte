<script lang="ts">
	import type { EmailToType } from '$lib/api/api';
	import InputsHalf from '$lib/components/contact/inputs-half.svelte';
	import Input from '$lib/components/ui-library/input/input.svelte';
	import type { Form } from '$lib/types/form';
	import { scrollToElement } from '$lib/utils/helpers';
	import { tick } from 'svelte';
	import Button from '$lib/components/ui-library/button/button.svelte';
	import { goto } from '$app/navigation';
	import { trackEvent } from '$lib/components/segment.svelte';

	let clazz = '';
	export { clazz as class };

	export let toType: EmailToType;

	const formData: Form = {
		workshopName: {
			el: null,
			valid: false,
			value: '',
		},
		companyName: {
			el: null,
			valid: false,
			value: '',
		},
	};

	let isFormDirty = false;
	let isEmailSent = false;
	let isSubmissionInProgress: boolean = false;
	let sectionStart: HTMLElement;
	$: isFormValid = Object.values(formData).every((field) => field.valid);

	const handleSubmit = async () => {
		isFormDirty = true;
		if (!isFormValid) {
			await tick();
			scrollToElement(sectionStart, '.error');
			return;
		}
		isSubmissionInProgress = true;

		try {
			const response = await fetch('/api/aws-workshop-submission', {
				method: 'POST',
				body: JSON.stringify({
					type: toType,
					workshopName: formData.workshopName.value,
					companyName: formData.companyName.value,
				}),
			});

			if (response.ok) {
				isEmailSent = true;
				isSubmissionInProgress = false;
				trackEvent('aws_workshop_submission', {
					workshopName: formData.workshopName.value,
					companyName: formData.companyName.value,
				});
				goto('https://gitpod.io/login');
			} else if (response.status === 409) {
				isSubmissionInProgress = false;
			} else {
				console.error(response.statusText);
			}
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div bind:this={sectionStart}>
	<form
		class="space-y-micro md:space-y-xx-small {clazz}"
		on:submit|preventDefault={handleSubmit}
		novalidate
	>
		<h2 class="h5 !mt-0 !mb-micro md:!mb-x-small">
			Fill in your workshop details
		</h2>
		<InputsHalf>
			<div>
				<Input
					hasError={isFormDirty && !formData.workshopName.valid}
					class="!w-full"
					label="Workshop name*"
					id="name"
					name="Workshop name"
					bind:value={formData.workshopName.value}
					bind:element={formData.workshopName.el}
					type="text"
					autocomplete="name"
					on:change={() => {
						formData.workshopName.valid =
							formData.workshopName.value &&
							formData.workshopName.el.checkValidity();
					}}
				/>
			</div>
			<div>
				<Input
					hasError={isFormDirty && !formData.companyName.valid}
					label="Company name*"
					id="name"
					name="Company name"
					bind:value={formData.companyName.value}
					bind:element={formData.companyName.el}
					type="text"
					autocomplete="name"
					on:change={() => {
						formData.companyName.valid =
							formData.companyName.value &&
							formData.companyName.el.checkValidity();
					}}
				/>
			</div>
		</InputsHalf>
		<Button
			class="flex gap-micro mx-auto !w-full justify-center !mt-micro sm:!mt-x-small"
			variant="primary"
			size="large"
			type="submit"
			isLoading={isSubmissionInProgress}
			disabled={(isFormDirty && !isFormValid) || isSubmissionInProgress}
		>
			Sign up
		</Button>
		<div>
			<p class="!text-sm max-w-lg">
				By submitting this form, I confirm that I acknowledge the
				collection and processing of personal data by Gitpod, as further
				described in the <a class="!underline" href="/privacy"
					>Privacy Policy.</a
				>
			</p>
		</div>
		{#if isFormDirty && !isFormValid}
			<legend class="text-xs text-error block mt-1 mb-2">
				Please fill out all required fields above
			</legend>
		{/if}
	</form>
</div>
