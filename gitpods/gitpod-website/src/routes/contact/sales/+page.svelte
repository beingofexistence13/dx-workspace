<script lang="ts">
	import validator from 'validator';
	import type { Form } from '$lib/types/form';
	import type { Email, EmailToType } from '$lib/api/api';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import SubmissionSuccess from '$lib/components/submission-success.svelte';
	import Section from '$lib/components/section.svelte';
	import { trackEvent, trackIdentity } from '$lib/components/segment.svelte';
	import Textarea from '$lib/components/ui-library/textarea';
	import Header from '$lib/components/header.svelte';
	import Input from '$lib/components/ui-library/input';
	import Select from '$lib/components/ui-library/select';
	import Card from '$lib/components/ui-library/card';
	import Button from '$lib/components/ui-library/button';
	import {
		dedicatedCloudPlatforms,
		noOfEngineers,
	} from '$lib/contents/contact';
	import { scrollToElement } from '$lib/utils/helpers';
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
	import Unleashing from '$lib/components/contact/unleashing.svelte';
	import InputsHalf from '$lib/components/contact/inputs-half.svelte';

	const enterpriseSubject = 'Enterprise';
	const dedicatedSubject = 'Dedicated self-serve';
	const otherSubject = 'Other';

	/**Example Usecase:
	 * /contact/sales?subject=enterprise
	 * /contact/sales?subject=Dedicated%20self-serve
	 * ...
	 */

	const subjects = [
		enterpriseSubject,
		dedicatedSubject,
		'Reselling',
		otherSubject,
	];

	onMount(() => {
		const subject = $page.url.searchParams.get('subject');
		const match = subjects.find(
			(s) => s.toLowerCase() === subject?.toLowerCase(),
		);

		formData.selectedSubject.value = 'Enterprise';

		if (match) {
			formData.selectedSubject.value = match;
			formData.selectedSubject.valid = true;
		}
	});

	let sectionStart: HTMLElement;
	let isCloudPlatformsSelectShown = false;
	let cloudInfrastructure = {
		el: null,
		valid: false,
		value: '',
	};

	let isSubmissionInProgress: boolean = false;

	let toType: EmailToType = 'sales';

	const formData: Form = {
		selectedSubject: {
			el: null,
			valid: true,
			value: '',
		},
		name: {
			el: null,
			valid: false,
			value: '',
		},
		workEmail: {
			el: null,
			valid: false,
			value: '',
		},
		companyWebsite: {
			el: null,
			valid: false,
			value: '',
		},
		noOfEngineers: {
			el: null,
			valid: false,
			value: '',
		},
		number: {
			el: null,
			valid: true,
			value: '',
		},
		message: {
			el: null,
			valid: false,
			value: '',
		},
	};

	$: if (
		formData.selectedSubject.value == enterpriseSubject ||
		formData.selectedSubject.value == dedicatedSubject
	) {
		isCloudPlatformsSelectShown = true;
		formData.cloudInfrastructure = cloudInfrastructure;
	} else {
		isCloudPlatformsSelectShown = false;
		delete formData.cloudInfrastructure;
	}

	let isFormDirty = false;
	let isEmailSent = false;

	$: isFormValid = Object.values(formData).every((field) => field.valid);

	const handleSubmit = async () => {
		isFormDirty = true;
		if (!isFormValid) {
			await tick();
			scrollToElement(sectionStart, '.error');
			return;
		}
		isSubmissionInProgress = true;

		await trackIdentity({
			name_untrusted: formData.name.value,
			email_untrusted: formData.workEmail.value,
			phone_untrusted: formData.number.value,
		});

		await trackEvent('message_submitted', {
			subject: formData.selectedSubject.value,
			infrastructure:
				formData.selectedSubject.value == enterpriseSubject ||
				formData.selectedSubject.value == dedicatedSubject
					? formData.cloudInfrastructure.value
					: undefined,
			full_name: formData.name.value,
			email: formData.workEmail.value,
			company_website: formData.companyWebsite.value,
			company_engineers: formData.noOfEngineers.value,
			message: formData.message.value,
			phone_number: formData.number.value,
		});

		const email: Email = {
			toType,
			replyTo: {
				email: formData.workEmail.value,
				name: formData.name.value,
			},
			subject:
				formData.selectedSubject.value +
				'  (from ' +
				formData.workEmail.value +
				')',
			message: `
        ${
			formData.cloudInfrastructure && formData.cloudInfrastructure.value
				? `Cloud Infrastructure: ${formData.cloudInfrastructure.value}`
				: ''
		}
        Company website: ${formData.companyWebsite.value}
        ${
			formData.noOfEngineers.value
				? `Total number of engineers: ${formData.noOfEngineers.value}`
				: ''
		}
        ${formData.number.value ? `Phone Number: ${formData.number.value}` : ''}
        Message: ${formData.message.value}
      `,
		};

		try {
			const emailToSend = email;
			const response = await fetch('/api/submit-form', {
				method: 'POST',
				body: JSON.stringify(emailToSend),
			});
			if (response.ok) {
				isEmailSent = true;
				setTimeout(() => {
					sectionStart.scrollIntoView();
				});
			} else {
				console.error(response.statusText);
			}
		} catch (error) {
			console.error(error);
		}
	};
</script>

<OpenGraph
	data={{
		description: "Let's talk about how we can work together!",
		title: 'Contact sales | Gitpod',
	}}
/>

{#if isEmailSent}
	<div bind:this={sectionStart}>
		<Header
			title="Thanks for contacting Gitpod!"
			text="We'll get back to you shortly."
			tight={true}
			textClassNames="max-w-2xl mx-auto text-large"
		/>
		<SubmissionSuccess contactSubmission={true} />
	</div>
{:else}
	<Header
		title={formData.selectedSubject.value == dedicatedSubject
			? 'Get started self-serve'
			: 'Contact Sales'}
		text="Let's talk about how we can work together!"
		tight={true}
		textAlign="left"
		centered={false}
	/>
	<div class="wrapper flex flex-col md:flex-row gap-x-xx-large">
		<Card
			size="small"
			class="shadow-normal p-xx-small sm:py-small sm:px-x-small md:p-medium lg:mb-xxx-large max-w-[710px]"
			styles="margin-top: 0"
			style="flex: 0 0 65%;"
		>
			<Section id="form" style="padding: 0; margin: 0">
				<div bind:this={sectionStart}>
					<form
						on:submit|preventDefault={handleSubmit}
						novalidate
						class="max-w-[45rem] m-auto"
					>
						<div class="space-y-8">
							<InputsHalf>
								<div>
									<Input
										hasError={isFormDirty &&
											!formData.name.valid}
										label="Full name*"
										id="name"
										name="full-name"
										bind:value={formData.name.value}
										bind:element={formData.name.el}
										on:change={() => {
											formData.name.valid =
												formData.name.value &&
												formData.name.el.checkValidity();
										}}
										type="text"
										autocomplete="name"
									/>
								</div>
								<div>
									<Input
										hasError={isFormDirty &&
											!formData.workEmail.valid}
										label="Work e-mail*"
										id="email"
										name="e-mail"
										bind:value={formData.workEmail.value}
										bind:element={formData.workEmail.el}
										on:change={() => {
											formData.workEmail.valid =
												formData.workEmail.value &&
												formData.workEmail.el.checkValidity();
										}}
										type="email"
										autocomplete="email"
									/>
								</div>
							</InputsHalf>
							<InputsHalf>
								<div>
									<Input
										label="Company website*"
										hasError={isFormDirty &&
											!formData.companyWebsite.valid}
										id="company-website"
										name="website"
										bind:value={formData.companyWebsite
											.value}
										bind:element={formData.companyWebsite
											.el}
										on:change={() => {
											formData.companyWebsite.valid =
												validator.isURL(
													formData.companyWebsite
														.value,
												) &&
												formData.companyWebsite.el.checkValidity();
										}}
										type="text"
										autocomplete="organization"
									/>
								</div>
								<div class="flex flex-col justify-end">
									<Select
										placeholder="Total number of engineers*"
										hasError={isFormDirty &&
											!formData.noOfEngineers.valid}
										name="noOfEngineers"
										bind:value={formData.noOfEngineers
											.value}
										bind:element={formData.noOfEngineers.el}
										on:change={() => {
											formData.noOfEngineers.valid =
												formData.noOfEngineers.value &&
												formData.noOfEngineers.el.checkValidity();
										}}
										options={noOfEngineers}
									/>
								</div>
							</InputsHalf>
							<InputsHalf>
								<div>
									<Input
										label="Phone number"
										optionalLabel={true}
										hasError={isFormDirty &&
											!formData.number.valid}
										id="phone-number"
										name="phone-number"
										bind:value={formData.number.value}
										bind:element={formData.number.el}
										on:change={() => {
											formData.number.valid =
												formData.number.value &&
												formData.number.el.checkValidity();
										}}
										type="tel"
										autocomplete="tel"
									/>
								</div>
								<div class="flex flex-col justify-end">
									{#if isCloudPlatformsSelectShown && formData.cloudInfrastructure}
										<Select
											hasError={isFormDirty &&
												!formData.cloudInfrastructure
													.valid}
											name="cloudInfrastructure"
											bind:value={formData
												.cloudInfrastructure.value}
											on:change={(e) => {
												formData.cloudInfrastructure.valid =
													formData.cloudInfrastructure
														.value &&
													// @ts-ignore
													e.target.validity.valid;
											}}
											options={dedicatedCloudPlatforms}
											placeholder="Cloud infrastructure*"
										/>
									{/if}
								</div>
							</InputsHalf>
							<div>
								<Textarea
									label="How can we help you?*"
									id="message"
									name="message"
									hasError={isFormDirty &&
										!formData.message.valid}
									bind:value={formData.message.value}
									bind:element={formData.message.el}
									on:change={() => {
										formData.message.valid =
											formData.message.value &&
											formData.message.el.validity.valid;
									}}
									cols="30"
									rows="6"
								/>
							</div>
							<p class="text-sm my-4">
								By submitting this form, I confirm that I
								acknowledge the collection and processing of
								personal data by Gitpod, as further described in
								the <a class="!underline" href="/privacy"
									>Privacy Policy.</a
								>
							</p>
							<Button
								variant="primary"
								size="medium"
								type="submit"
								disabled={(isFormDirty && !isFormValid) ||
									isSubmissionInProgress}
								isLoading={isSubmissionInProgress}
							>
								Submit
							</Button>
							{#if isFormDirty && !isFormValid}
								<legend
									class="text-xs text-error block mt-1 mb-2"
								>
									Please fill out all required fields above
								</legend>
							{/if}
						</div>
						{#if isEmailSent}
							<p>Thank you! We'll get back to you soon.</p>
						{/if}
					</form>
				</div>
			</Section>
		</Card>
		<Unleashing />
	</div>
{/if}
