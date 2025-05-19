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
  hpcsaNumber: z.string().min(6, {
    message: "HPCSA number must be valid.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  practiceType: z.string({
    required_error: "Please select your practice type.",
  }),
  provinces: z.array(z.string()).min(1, {
    message: "Please select at least one province of operation.",
  }),
  uploadCertifications: z.boolean().default(false),
  setup2FA: z.boolean().default(false),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and POPIA consent.",
  }),
})

export function ProviderRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      hpcsaNumber: "",
      email: "",
      phone: "",
      provinces: [],
      uploadCertifications: false,
      setup2FA: false,
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
      window.location.href = "/dashboard/provider"
    }, 2000)
  }

  const toggleProvince = (province: string) => {
    setSelectedProvinces((current) => {
      const updated = current.includes(province) ? current.filter((p) => p !== province) : [...current, province]

      form.setValue("provinces", updated)
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
          name="hpcsaNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>HPCSA Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your HPCSA number" {...field} />
              </FormControl>
              <FormDescription>Your Health Professions Council of South Africa registration number.</FormDescription>
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
          name="practiceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Practice Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your practice type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="nurse">Nurse</SelectItem>
                  <SelectItem value="pharmacist">Pharmacist</SelectItem>
                  <SelectItem value="physiotherapist">Physiotherapist</SelectItem>
                  <SelectItem value="dentist">Dentist</SelectItem>
                  <SelectItem value="psychologist">Psychologist</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="provinces"
          render={() => (
            <FormItem>
              <FormLabel>Provinces of Operation</FormLabel>
              <FormDescription>Select all provinces where you provide healthcare services.</FormDescription>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  { id: "gauteng", label: "Gauteng" },
                  { id: "western-cape", label: "Western Cape" },
                  { id: "eastern-cape", label: "Eastern Cape" },
                  { id: "kwazulu-natal", label: "KwaZulu-Natal" },
                  { id: "free-state", label: "Free State" },
                  { id: "north-west", label: "North West" },
                  { id: "mpumalanga", label: "Mpumalanga" },
                  { id: "limpopo", label: "Limpopo" },
                  { id: "northern-cape", label: "Northern Cape" },
                ].map((province) => (
                  <div key={province.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={province.id}
                      checked={selectedProvinces.includes(province.id)}
                      onCheckedChange={() => toggleProvince(province.id)}
                    />
                    <label
                      htmlFor={province.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {province.label}
                    </label>
                  </div>
                ))}
              </div>
              <FormMessage />
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
                <FormDescription>Upload your medical certifications and qualifications.</FormDescription>
              </div>
            </FormItem>
          )}
        />
        {form.watch("uploadCertifications") && (
          <div className="rounded-md border border-dashed p-6 text-center">
            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium">
              Drag and drop your certifications here or{" "}
              <span className="text-green-600 hover:underline">browse files</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Supported formats: PDF, JPG, PNG (max 10MB)</p>
          </div>
        )}
        <FormField
          control={form.control}
          name="setup2FA"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Set up Two-Factor Authentication</FormLabel>
                <FormDescription>Enhance your account security with 2FA (recommended).</FormDescription>
              </div>
            </FormItem>
          )}
        />
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
                  <Link href="/terms" className="text-green-600 hover:underline">
                    terms of service
                  </Link>{" "}
                  and consent to the processing of my personal information in accordance with the{" "}
                  <Link href="/privacy" className="text-green-600 hover:underline">
                    Protection of Personal Information Act (POPIA)
                  </Link>
                  .
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
      </form>
    </Form>
  )
}
