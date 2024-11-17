'use client'

import { Suspense } from 'react'
import { PackageSelectionForm } from './package-selection-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PackageSelectionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
            <Suspense fallback={
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>Loading...</CardTitle>
                        <CardDescription>Please wait while we load your package details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[400px] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    </CardContent>
                </Card>
            }>
                <PackageSelectionForm />
            </Suspense>
        </div>
    )
}