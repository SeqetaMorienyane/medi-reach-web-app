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
  locationPin: z.boolean().default(false),
  uploadRecords: z.boolean().default(false),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and POPIA consent.",
  }),
})

export function PatientRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      idNumber: "",
      email: "",
      phone: "",
      locationPin: false,
      uploadRecords: false,
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
      window.location.href = "/dashboard/patient"
    }, 2000)
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
        <FormField
          control={form.control}
          name="province"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Province</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your province" />
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
          name="locationPin"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Share my location</FormLabel>
                <FormDescription>
                  Allow MediReach to access your location for better service recommendations.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uploadRecords"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Upload medical records</FormLabel>
                <FormDescription>
                  Upload previous medical records to improve your healthcare experience.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        {form.watch("uploadRecords") && (
          <div className="rounded-md border border-dashed p-6 text-center">
            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium">
              Drag and drop your medical records here or{" "}
              <span className="text-blue-600 hover:underline">browse files</span>
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
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    terms of service
                  </Link>{" "}
                  and consent to the processing of my personal information in accordance with the{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Protection of Personal Information Act (POPIA)
                  </Link>
                  .
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
      </form>
    </Form>
  )
}
