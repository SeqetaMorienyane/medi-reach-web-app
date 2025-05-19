"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  idNumber: z.string().length(13, {
    message: "South African ID number must be 13 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  province: z.string({
    required_error: "Please select a province.",
  }),
  district: z.string({
    required_error: "Please select a district.",
  }),
  municipality: z.string({
    required_error: "Please select a municipality.",
  }),
  qualifications: z.string().min(1, {
    message: "Please enter your qualifications.",
  }),
  languages: z.array(z.string()).min(1, {
    message: "Please select at least one language.",
  }),
  supervisorName: z.string().min(1, {
    message: "Supervisor name is required.",
  }),
  supervisorContact: z.string().min(10, {
    message: "Supervisor contact must be at least 10 digits.",
  }),
  hasSmartphone: z.boolean().default(false),
  hasTransport: z.boolean().default(false),
  uploadCertifications: z.boolean().default(false),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and POPIA consent.",
  }),
})

export function CHWRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      idNumber: "",
      email: "",
      phone: "",
      qualifications: "",
      languages: [],
      supervisorName: "",
      supervisorContact: "",
      hasSmartphone: false,
      hasTransport: false,
      uploadCertifications: false,
      consent: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // In a real application, you would submit the form data to your API here
    console.log(values)
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to dashboard or confirmation page
      window.location.href = "/dashboard/chw"
    }, 2000)
  }

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((current) => {
      const updated = current.includes(language) ? current.filter((l) => l !== language) : [...current, language]

      form.setValue("languages", updated)
      return updated
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="idNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>South African ID Number</FormLabel>
              <FormControl>
                <Input placeholder="13-digit ID number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 0712345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Province</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select province" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                    <SelectItem value="western-cape">Western Cape</SelectItem>
                    <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                    <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                    <SelectItem value="free-state">Free State</SelectItem>
                    <SelectItem value="north-west">North West</SelectItem>
                    <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                    <SelectItem value="limpopo">Limpopo</SelectItem>
                    <SelectItem value="northern-cape">Northern Cape</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="tshwane">Tshwane</SelectItem>
                    <SelectItem value="johannesburg">Johannesburg</SelectItem>
                    <SelectItem value="ekurhuleni">Ekurhuleni</SelectItem>
                    <SelectItem value="sedibeng">Sedibeng</SelectItem>
                    <SelectItem value="west-rand">West Rand</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="municipality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Municipality</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select municipality" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="city-of-tshwane">City of Tshwane</SelectItem>
                    <SelectItem value="city-of-johannesburg">City of Johannesburg</SelectItem>
                    <SelectItem value="ekurhuleni-metro">Ekurhuleni Metro</SelectItem>
                    <SelectItem value="mogale-city">Mogale City</SelectItem>
                    <SelectItem value="emfuleni">Emfuleni</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="qualifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qualifications</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List your relevant qualifications, training, and certifications"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="languages"
          render={() => (
            <FormItem>
              <FormLabel>Languages Spoken</FormLabel>
              <FormDescription>Select all languages you can speak fluently.</FormDescription>
              <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3">
                {[
                  { id: "english", label: "English" },
                  { id: "afrikaans", label: "Afrikaans" },
                  { id: "zulu", label: "isiZulu" },
                  { id: "xhosa", label: "isiXhosa" },
                  { id: "sotho", label: "Sesotho" },
                  { id: "tswana", label: "Setswana" },
                  { id: "tsonga", label: "Xitsonga" },
                  { id: "venda", label: "Tshivenda" },
                  { id: "ndebele", label: "isiNdebele" },
                ].map((language) => (
                  <div key={language.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={language.id}
                      checked={selectedLanguages.includes(language.id)}
                      onCheckedChange={() => toggleLanguage(language.id)}
                    />
                    <label
                      htmlFor={language.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {language.label}
                    </label>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="supervisorName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supervisor Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your supervisor's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="supervisorContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supervisor Contact</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your supervisor's contact number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="hasSmartphone"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I have a smartphone</FormLabel>
                <FormDescription>A smartphone is required to use the MediReach CHW mobile application.</FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasTransport"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I have reliable transportation</FormLabel>
                <FormDescription>
                  Reliable transportation is needed to visit community members in your assigned area.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uploadCertifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Upload certifications</FormLabel>
                <FormDescription>Upload your CHW training certificates and qualifications.</FormDescription>
              </div>
            </FormItem>
          )}
        />
        {form.watch("uploadCertifications") && (
          <div className="rounded-md border border-dashed p-6 text-center">
            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium">
              Drag and drop your certifications here or{" "}
              <span className="text-purple-600 hover:underline">browse files</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Supported formats: PDF, JPG, PNG (max 10MB)</p>
          </div>
        )}
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>POPIA Consent</FormLabel>
                <FormDescription>
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-600 hover:underline">
                    terms of service
                  </Link>{" "}
                  and consent to the processing of my personal information in accordance with the{" "}
                  <Link href="/privacy" className="text-purple-600 hover:underline">
                    Protection of Personal Information Act (POPIA)
                  </Link>
                  .
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
      </form>
    </Form>
  )
}
