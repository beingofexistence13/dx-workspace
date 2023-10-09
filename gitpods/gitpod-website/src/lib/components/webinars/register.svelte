<script lang="ts">
	import type { EmailToType } from '$lib/api/api';
	import validator from 'validator';
	import InputsHalf from '$lib/components/contact/inputs-half.svelte';
	import Input from '$lib/components/ui-library/input/input.svelte';
	import type { Form } from '$lib/types/form';
	import { scrollToElement } from '$lib/utils/helpers';
	import { tick } from 'svelte';
	import Button from '$lib/components/ui-library/button/button.svelte';
	import SubmissionSuccess from '../submission-success.svelte';
	import Wrapper from './wrapper.svelte';

	let clazz = '';
	export { clazz as class };

	export let toType: EmailToType;
	export let eventType: string;

	const formData: Form = {
		name: {
			el: null,
			valid: false,
			value: '',
		},
		email: {
			el: null,
			valid: false,
			value: '',
		},
		companyWebsite: {
			el: null,
			valid: false,
			value: '',
		},
	};

	let isFormDirty = false;
	let isEmailSent = false;
	let isSubmissionInProgress: boolean = false;
	let sectionStart: HTMLElement;
	let isDuplicate: boolean = false;

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
			const response = await fetch('/api/register-webinar', {
				method: 'POST',
				body: JSON.stringify({
					type: toType,
					name: formData.name.value,
					email: formData.email.value,
					company: formData.companyWebsite.value,
				}),
			});

			if (response.ok) {
				isEmailSent = true;
				setTimeout(() => {
					sectionStart.scrollIntoView();
				});
			} else if (response.status === 409) {
				isDuplicate = true;
			} else {
				console.error(response.statusText);
			}
		} catch (error) {
			console.error(error);
		}
	};
</script>

<Wrapper
	class="sticky left-full lgx:top-40 px-xx-small py-x-small sm:p-x-small xl:px-small xl:py-x-small {clazz}"
>
	<div bind:this={sectionStart}>
		{#if isEmailSent}
			<SubmissionSuccess
				title="Thanks for your registration"
				text="You'll receive all further information via email."
			/>
		{:else if isDuplicate}
			<SubmissionSuccess title="You have already registered" />
		{:else}
			<form
				class="space-y-micro md:space-y-xx-small"
				on:submit|preventDefault={handleSubmit}
				novalidate
			>
				<h2 class="h5">Register for {eventType}</h2>
				<InputsHalf>
					<div>
						<Input
							hasError={isFormDirty && !formData.name.valid}
							label="Full name*"
							id="name"
							name="full-name"
							bind:value={formData.name.value}
							bind:element={formData.name.el}
							type="text"
							autocomplete="name"
							on:change={() => {
								formData.name.valid =
									formData.name.value &&
									formData.name.el.checkValidity();
							}}
						/>
					</div>
					<div>
						<Input
							hasError={isFormDirty && !formData.email.valid}
							label="Work email*"
							id="email"
							name="work-email"
							bind:value={formData.email.value}
							bind:element={formData.email.el}
							type="email"
							autocomplete="email"
							on:change={() => {
								formData.email.valid =
									formData.email.value &&
									formData.email.el.checkValidity();
							}}
						/>
					</div>
				</InputsHalf>
				<InputsHalf>
					<div>
						<Input
							hasError={isFormDirty &&
								!formData.companyWebsite.valid}
							label="Company website*"
							id="company"
							name="website"
							bind:value={formData.companyWebsite.value}
							bind:element={formData.companyWebsite.el}
							on:change={() => {
								formData.companyWebsite.valid =
									validator.isURL(
										formData.companyWebsite.value,
									) &&
									formData.companyWebsite.el.checkValidity();
							}}
						/>
					</div>
				</InputsHalf>
				<div>
					<p class="text-sm">
						By submitting this form, I confirm that I acknowledge
						the collection and processing of personal data by
						Gitpod, as further described in the <a
							class="!underline"
							href="/privacy">Privacy Policy.</a
						>
					</p>
				</div>
				<Button
					variant="primary"
					size="large"
					type="submit"
					isLoading={isSubmissionInProgress}
					disabled={(isFormDirty && !isFormValid) ||
						isSubmissionInProgress}
				>
					Register now
				</Button>
				{#if isFormDirty && !isFormValid}
					<legend class="text-xs text-error block mt-1 mb-2">
						Please fill out all required fields above
					</legend>
				{/if}
			</form>
		{/if}
	</div>
</Wrapper>
