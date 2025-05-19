"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const medicationSchema = z.object({
  name: z.string().min(1, { message: "Medication name is required" }),
  dosage: z.string().min(1, { message: "Dosage is required" }),
  frequency: z.string().min(1, { message: "Frequency is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
  instructions: z.string().optional(),
})

const formSchema = z.object({
  patientId: z.string().min(1, { message: "Patient ID is required" }),
  patientName: z.string().min(1, { message: "Patient name is required" }),
  diagnosis: z.string().min(1, { message: "Diagnosis is required" }),
  medications: z.array(medicationSchema).min(1, { message: "At least one medication is required" }),
  notes: z.string().optional(),
  validUntil: z.string().min(1, { message: "Valid until date is required" }),
})

export function PrescriptionForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientId: "",
      patientName: "",
      diagnosis: "",
      medications: [{ name: "", dosage: "", frequency: "", duration: "", instructions: "" }],
      notes: "",
      validUntil: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // In a real application, you would submit the form data to your API here
    console.log(values)
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to the prescription view page
      router.push("/prescriptions/123")
    }, 2000)
  }

  const addMedication = () => {
    const currentMedications = form.getValues("medications")
    form.setValue("medications", [
      ...currentMedications,
      { name: "", dosage: "", frequency: "", duration: "", instructions: "" },
    ])
  }

  const removeMedication = (index: number) => {
    const currentMedications = form.getValues("medications")
    if (currentMedications.length > 1) {
      form.setValue(
        "medications",
        currentMedications.filter((_, i) => i !== index),
      )
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="patientId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter patient ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="patientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter patient name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <FormField
              control={form.control}
              name="diagnosis"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Diagnosis</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter diagnosis" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Medications</h3>
              <Button type="button" variant="outline" size="sm" onClick={addMedication}>
                <Plus className="mr-2 h-4 w-4" />
                Add Medication
              </Button>
            </div>
            {form.watch("medications").map((_, index) => (
              <div key={index} className="mb-6">
                {index > 0 && <Separator className="my-6" />}
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Medication #{index + 1}</h4>
                  {form.watch("medications").length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeMedication(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  )}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name={`medications.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Medication Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter medication name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medications.${index}.dosage`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dosage</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 500mg" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medications.${index}.frequency`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequency</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="once-daily">Once daily</SelectItem>
                            <SelectItem value="twice-daily">Twice daily</SelectItem>
                            <SelectItem value="three-times-daily">Three times daily</SelectItem>
                            <SelectItem value="four-times-daily">Four times daily</SelectItem>
                            <SelectItem value="every-morning">Every morning</SelectItem>
                            <SelectItem value="every-evening">Every evening</SelectItem>
                            <SelectItem value="as-needed">As needed</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medications.${index}.duration`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 7 days, 2 weeks" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medications.${index}.instructions`}
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Special Instructions</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Take with food" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter any additional notes" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="validUntil"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valid Until</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormDescription>The prescription will expire after this date.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Prescription"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
