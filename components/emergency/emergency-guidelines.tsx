import { Heart, Thermometer, LigatureIcon as Bandage, AlertTriangle, Pill } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EmergencyGuidelines() {
  return (
    <div className="space-y-6">
      <Card className="border-amber-200 bg-amber-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-amber-700">Emergency First Aid Guidelines</CardTitle>
          <CardDescription>Basic first aid information for common emergencies</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-amber-700">
            These guidelines are for informational purposes only. Always seek professional medical help in an emergency.
          </p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-600" />
            <span>Cardiac Emergency</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-2">
              <h4 className="font-medium">Signs of a Heart Attack:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Chest pain or pressure</li>
                <li>Pain radiating to arm, jaw, or back</li>
                <li>Shortness of breath</li>
                <li>Nausea or cold sweat</li>
                <li>Lightheadedness</li>
              </ul>

              <h4 className="font-medium">What to Do:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Call emergency services immediately (10177 or 10111)</li>
                <li>Have the person sit or lie down in a comfortable position</li>
                <li>Loosen tight clothing</li>
                <li>If the person is not allergic to aspirin and it's available, have them chew one adult aspirin</li>
                <li>If the person becomes unresponsive, begin CPR if trained</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-orange-600" />
            <span>Burns</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-2">
              <h4 className="font-medium">For Minor Burns:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Cool the burn with cool (not cold) running water for 10-15 minutes</li>
                <li>Remove jewelry or tight items from the burned area</li>
                <li>Apply aloe vera gel or moisturizer</li>
                <li>Cover with a sterile, non-stick bandage</li>
                <li>Take over-the-counter pain medication if needed</li>
              </ul>

              <h4 className="font-medium">For Severe Burns:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Call emergency services immediately</li>
                <li>Do not remove burned clothing stuck to the skin</li>
                <li>Cover the area with a clean, dry cloth</li>
                <li>Elevate the burned area above heart level if possible</li>
                <li>Monitor for signs of shock</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="flex items-center gap-2">
            <Bandage className="h-5 w-5 text-blue-600" />
            <span>Bleeding</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-2">
              <h4 className="font-medium">For External Bleeding:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Apply direct pressure to the wound with a clean cloth or bandage</li>
                <li>If blood soaks through, add another layer without removing the first</li>
                <li>If possible, elevate the wounded area above the heart</li>
                <li>If bleeding is severe, apply pressure to the appropriate pressure point</li>
                <li>Secure the dressing with a bandage</li>
              </ul>

              <h4 className="font-medium">When to Seek Medical Help:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>If bleeding cannot be controlled</li>
                <li>If the wound is deep or gaping</li>
                <li>If the wound is from an animal or human bite</li>
                <li>If there is embedded debris in the wound</li>
                <li>If signs of infection develop (redness, swelling, warmth, pus)</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <span>Choking</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-2">
              <h4 className="font-medium">Signs of Choking:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Inability to talk or make noise</li>
                <li>Difficulty breathing</li>
                <li>Clutching the throat</li>
                <li>Cyanosis (bluish discoloration of the skin)</li>
                <li>Loss of consciousness (in severe cases)</li>
              </ul>

              <h4 className="font-medium">Heimlich Maneuver (for Adults):</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Stand behind the person and wrap your arms around their waist</li>
                <li>Make a fist with one hand and place it above the navel</li>
                <li>Grab your fist with your other hand</li>
                <li>Press into the abdomen with quick, upward thrusts</li>
                <li>Repeat until the object is expelled or the person becomes unconscious</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-purple-600" />
            <span>Poisoning</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-2">
              <h4 className="font-medium">If Someone Has Been Poisoned:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Call the Poison Information Center immediately: 0861 555 777</li>
                <li>Do not induce vomiting unless instructed by a medical professional</li>
                <li>If the poison is on the skin, remove contaminated clothing and rinse skin</li>
                <li>If the poison is inhaled, get the person to fresh air</li>
                <li>Bring the container or substance to the hospital if possible</li>
              </ul>

              <h4 className="font-medium">Information to Provide:</h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>The person's age and weight</li>
                <li>The name of the product or substance</li>
                <li>When it was consumed or exposed to</li>
                <li>How much was consumed</li>
                <li>Current symptoms</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
